import { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { BEAT_MS, lubDub } from '../hooks/useHeartbeat'

const MODEL_URL = '/models/heart.glb'
const mat = (color, extra = {}) =>
  new THREE.MeshPhysicalMaterial({ color, roughness: 0.38, metalness: 0.05, clearcoat: 0.8, clearcoatRoughness: 0.25, ...extra })

function buildHeart() {
  const s = new THREE.Shape()
  s.moveTo(0, 0.6)
  s.bezierCurveTo(0, 1.0, -0.4, 1.4, -0.9, 1.4)
  s.bezierCurveTo(-1.5, 1.4, -1.6, 0.7, -1.6, 0.4)
  s.bezierCurveTo(-1.6, -0.4, -0.8, -0.9, 0, -1.8)
  s.bezierCurveTo(0.8, -0.9, 1.6, -0.4, 1.6, 0.4)
  s.bezierCurveTo(1.6, 0.7, 1.5, 1.4, 0.9, 1.4)
  s.bezierCurveTo(0.4, 1.4, 0, 1.0, 0, 0.6)
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.8, bevelEnabled: true, bevelThickness: 0.55, bevelSize: 0.45, bevelSegments: 14, curveSegments: 56 })
  g.center()
  // Neregularități organice (țesut muscular)
  const p = g.attributes.position
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i)
    const n = Math.sin(x * 3.1 + y * 2.3) * Math.cos(z * 3.7 + y * 1.7) * 0.05
    p.setXYZ(i, x + n * 0.6, y + n * 0.6, z + n)
  }
  g.computeVertexNormals()
  return g
}

const tube = (pts, r) => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((v) => new THREE.Vector3(...v))), 40, r, 20, false)

function ProceduralHeart() {
  const geo = useMemo(() => ({
    body: buildHeart(),
    aorta: tube([[0.15, 1.1, 0], [0.25, 2.0, 0.05], [-0.2, 2.6, 0], [-0.85, 2.2, -0.05], [-1.0, 1.4, -0.1]], 0.27),
    pulm: tube([[-0.45, 1.2, 0.4], [-0.55, 2.0, 0.5], [-1.1, 2.4, 0.4]], 0.2),
    cava: tube([[0.85, 1.1, -0.2], [0.95, 2.1, -0.25], [0.95, 2.7, -0.2]], 0.2),
    cor1: tube([[-0.2, 1.2, 0.9], [-0.6, 0.3, 1.05], [-0.4, -0.8, 0.9]], 0.06),
    cor2: tube([[0.3, 1.2, 0.9], [0.8, 0.2, 1.0], [0.35, -0.9, 0.85]], 0.055),
  }), [])
  const m = useMemo(() => ({
    body: mat('#D6402B', { emissive: '#7a1c0c', emissiveIntensity: 0.35 }),
    vessel: mat('#EE6A32'),
    cor: mat('#FFB45E', { roughness: 0.5 }),
  }), [])
  return (
    <group rotation={[0, 0, 0.22]} position={[0, -0.55, 0]}>
      <mesh geometry={geo.body} material={m.body} />
      <mesh geometry={geo.aorta} material={m.vessel} />
      <mesh geometry={geo.pulm} material={m.vessel} />
      <mesh geometry={geo.cava} material={m.vessel} />
      <mesh geometry={geo.cor1} material={m.cor} />
      <mesh geometry={geo.cor2} material={m.cor} />
    </group>
  )
}

function GlbHeart() {
  const { scene } = useGLTF(MODEL_URL)
  return <primitive object={scene} />
}

function Beating({ start, hasModel }) {
  const ref = useRef()
  useFrame(() => {
    const t = (((performance.now() - start) % BEAT_MS) / BEAT_MS)
    const e = lubDub(t)
    const s = 1 + 0.11 * e
    ref.current.scale.setScalar(0.78 * s)
    ref.current.rotation.y = Math.sin((performance.now() - start) / 1800) * 0.45
  })
  return (
    <group ref={ref}>
      <Suspense fallback={null}>{hasModel ? <GlbHeart /> : <ProceduralHeart />}</Suspense>
    </group>
  )
}

export default function HeartScene({ start, hasModel }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0.3, 7], fov: 38 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 4, 5]} intensity={90} color="#FFD8A8" />
      <pointLight position={[-4, -1, 3]} intensity={40} color="#FF8A4D" />
      <pointLight position={[0, 2, -4]} intensity={60} color="#3FBF8F" />
      <Beating start={start} hasModel={hasModel} />
    </Canvas>
  )
}
