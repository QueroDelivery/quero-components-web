export interface ModalProps {
  title?: string;
  actions?: React.ReactNode;
  loading?: boolean;
  open: boolean;
  closeIcon?: boolean;
  closeOnDimerClick?: boolean;
  onClose: Function;
  onBack?: Function;
  size?: 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';
  width?: number | string;
}
