import React, { useEffect, useRef, useState } from 'react';
import { DataSet } from 'vis-data/peer';
import { Network } from 'vis-network/peer';
import { AudioTrack, Scene } from '../types';

interface StoryMinimapProps {
  scenes: Scene[];
  currentSceneId: string;
  setShowMinimap: React.Dispatch<React.SetStateAction<boolean>>;
  audioTracks: AudioTrack[];
}

const StoryMinimap: React.FC<StoryMinimapProps> = ({ scenes, currentSceneId, setShowMinimap, audioTracks }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodes = new DataSet(scenes.map(scene => ({
      id: scene.id,
      label: '',
      color: scene.id === currentSceneId ? '#ff6b6b' : '#4dabf7',
      shape: 'dot',
      size: 10,
      font: { size: 0 }
    })));

    const edges = new DataSet<{ id: string; from: string; to: string; arrows?: string; color?: string }>(
      scenes.flatMap(scene => {
        const connections = [];
        if (scene.nextSceneId && scenes.some(s => s.id === scene.nextSceneId)) {
          connections.push({
            id: `${scene.id}-${scene.nextSceneId}`,
            from: scene.id,
            to: scene.nextSceneId,
            arrows: 'to'
          });
        }
        if (scene.choices) {
          connections.push(...scene.choices
            .filter(choice => scenes.some(s => s.id === choice.nextSceneId))
            .map((choice, index) => ({
              id: `${scene.id}-choice-${index}-${choice.nextSceneId}`,
              from: scene.id,
              to: choice.nextSceneId,
              color: '#40c057'
            }))
          );
        }
        return connections;
      })
    );

    networkRef.current = new Network(containerRef.current, { nodes, edges }, {
      nodes: {
        borderWidth: 0,
        shadow: false
      },
      edges: {
        arrows: {
          to: { scaleFactor: 0.4 }
        },
        smooth: false
      },
      interaction: {
        dragNodes: false,
        dragView: true,
        zoomView: true
      },
      physics: {
        stabilization: {
          enabled: true,
          iterations: 100
        },
        barnesHut: {
          gravitationalConstant: -2000,
          springLength: 200,
          springConstant: 0.04,
          damping: 0.09
        }
      },
      layout: {
        hierarchical: {
          enabled: true,
          direction: 'UD',
          sortMethod: 'directed',
          levelSeparation: 150
        }
      }
    });

    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
      }
    };
  }, [scenes, currentSceneId]);

  return <div 
    ref={containerRef} 
    className="story-minimap"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {isHovered && (
      <button 
        className="minimap-close"
        onClick={() => setShowMinimap(false)}
      >
        ×
      </button>
    )}
    <div className="audio-info">
      Current Sound: {audioTracks.find(t => t.startFrame === currentSceneId)?.id || 'None'}
    </div>
  </div>;
};

export default StoryMinimap;