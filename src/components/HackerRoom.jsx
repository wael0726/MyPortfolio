import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'

export function HackerRoom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/computeranimation.glb')
  const { actions } = useAnimations(animations, group)

  // Activation automatique des animations
  useEffect(() => {
    if (actions) {
      // Jouer toutes les animations disponibles
      Object.keys(actions).forEach((animationName) => {
        actions[animationName].play()
      })
    }

    return () => {
      // Nettoyage des animations
      if (actions) {
        Object.keys(actions).forEach((animationName) => {
          actions[animationName].stop()
        })
      }
    }
  }, [actions])

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[3, 3, 3]}
      rotation={[-3, Math.PI, 3.12]}
      position={[-1, -3.5, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>

              {/* Équipement principal */}
              <group name="pasokon_1" position={[0.2, -0.3, 0.1]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.pasokon}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.terrarium1}
                />
              </group>

              {/* Personnage Amelia */}
              <group
                name="amelia_37"
                position={[-0, 0.621, 0]}
                rotation={[0, 0.864, 0]}
                scale={1.1}
              >
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <skinnedMesh
                    name="Object_18"
                    geometry={nodes.Object_18.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_18.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_37.skeleton}
                    morphTargetDictionary={nodes.Object_37.morphTargetDictionary}
                    morphTargetInfluences={nodes.Object_37.morphTargetInfluences}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.terrarium1ame}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_41.skeleton}
                  />
                </group>
              </group>

              {/* Isopod */}
              <group
                name="isopod002_49"
                position={[0.2, 0.57, 0.3]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.1}
              >
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <skinnedMesh
                    name="Object_65"
                    geometry={nodes.Object_65.geometry}
                    material={materials.terrarium1}
                    skeleton={nodes.Object_65.skeleton}
                  />
                  <skinnedMesh
                    name="Object_67"
                    geometry={nodes.Object_67.geometry}
                    material={materials.terrarium1ameoutline}
                    skeleton={nodes.Object_67.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/computeranimation.glb')

export default HackerRoom