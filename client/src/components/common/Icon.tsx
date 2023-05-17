import SpriteIcon from '../../assets/sprite-icon.svg'

type IconNameType =
  | 'camera-color'
  | 'camera-oval'
  | 'close'
  | 'edit-gray'
  | 'map-color'
  | 'no-profile'
  | 'pin'
  | 'refresh'
  | 'time-gray'
  | 'trash-gray'
  | 'no-image'
  | 'arrow-right'
  | 'arrow-left'
  | 'three-dot'

interface IconProps {
  name: IconNameType
  size?: 16 | 24 | 48
}

export default function Icon({ name, size = 24 }: IconProps) {
  return (
    <svg width={size} height={size}>
      <use href={`${SpriteIcon}#${name}`} />
    </svg>
  )
}
