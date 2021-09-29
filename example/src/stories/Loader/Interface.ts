export interface LoaderProps {
  className?: string;
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
  position?: 'left' | 'center' | 'right';
  color?: string;
  style?: React.CSSProperties | any;
}
