/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler, CSSProperties, forwardRef } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';

import { Switch, Toggle, ActiveInactive } from './styles';

type TSelectors = 'switch' | 'toggle' | 'activeInactive';

export interface SelectionProps {
  type: TSelectors;
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onChange?: MouseEventHandler<HTMLElement>;
  size?: sizesTypes;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const TYPES: Record<TSelectors, TSelectors> = {
  switch: 'switch',
  toggle: 'toggle',
  activeInactive: 'activeInactive',
};

const Selection = forwardRef<HTMLDivElement, SelectionProps>(
  (
    {
      type,
      checked = false,
      onClick,
      onChange,
      size,
      disabled,
      className,
      style,
    }: SelectionProps,
    ref,
  ) => {
    const eventFunction = disabled ? undefined : onClick || onChange;

    function renderSwitch() {
      return (
        <Switch
          className={className}
          style={style}
          size={size}
          ref={ref}
          disabled={disabled}
          role="switch"
          onClick={eventFunction}
          // onKeyPress={event =>
          //   (event.key == ' ' && !disabled && eventFunction) ??
          //   eventFunction(event)
          // }
        >
          <div className={`${checked ? 'checked' : ''}`} />
          <span data-testid="control" className="control" />
        </Switch>
      );
    }

    function renderToggle() {
      return (
        <Toggle
          className={className}
          style={style}
          checked={checked}
          ref={ref}
          size={size}
          disabled={disabled}
          role="switch"
          onClick={eventFunction}
        >
          <button type="button" data-testid="btn-left" className="btn left">
            <span>não</span>
          </button>
          <button type="button" data-testid="btn-right" className="btn right">
            <span>sim</span>
          </button>
        </Toggle>
      );
    }

    function renderActiveInactive() {
      return (
        <ActiveInactive
          className={className}
          style={style}
          checked={checked}
          ref={ref}
          size={size}
          disabled={disabled}
          role="switch"
          onClick={eventFunction}
        >
          <button type="button" className="btn left">
            <span>{checked ? 'desativar' : 'inativo'}</span>
          </button>
          <button type="button" className="btn right">
            <span>{checked ? 'ativo' : 'ativar'}</span>
          </button>
        </ActiveInactive>
      );
    }

    switch (type) {
      case TYPES.switch:
        return renderSwitch();
      case TYPES.toggle:
        return renderToggle();
      case TYPES.activeInactive:
        return renderActiveInactive();
      default:
        return null;
    }
  },
);

Selection.displayName = 'Selection';

export default Selection;
