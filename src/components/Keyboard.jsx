import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Keyboard(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/keyboard.glb');
  useFrame(({ mouse }) => {
    if (group.current) {
      group.current.rotation.y = mouse.x * 0.2 + Math.PI / 90;
      group.current.rotation.x = 0.4;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Plane_0" position={[0.109, 0.29, 0.527]} rotation={[0.172, 0, 0]}>
                <mesh
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group name="Plane088_1" position={[0.02, 0.449, -0.027]} rotation={[0.172, 0, 0]}>
                <mesh
                  geometry={nodes.Object_6.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group name="Text086_2" position={[0.313, 0.59, -0.118]} rotation={[0.172, 0, 0]}>
                <mesh
                  geometry={nodes.Object_8.geometry}
                  material={materials['Material.004']}
                />
                <mesh
                  geometry={nodes.Object_9.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Text002_3" position={[0.313, 0.59, -0.119]} rotation={[0.172, 0, 0]}>
                <mesh
                  geometry={nodes.Object_11.geometry}
                  material={materials['Material.004']}
                />
                <mesh
                  geometry={nodes.Object_12.geometry}
                  material={materials['Material.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/keyboard.glb');