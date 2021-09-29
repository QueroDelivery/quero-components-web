export interface SelectionProps {
  type: 'switch' | 'toggle' | 'activeInactive';
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
  checked?: boolean;
  disabled?: boolean;
  selectionRef?: any;
  onChange?: () => void;
}
