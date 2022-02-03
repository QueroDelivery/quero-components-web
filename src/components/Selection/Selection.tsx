/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ref, MouseEventHandler, CSSProperties } from 'react';
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
  ref?: Ref<HTMLButtonElement>;
}

const TYPES: Record<TSelectors, TSelectors> = {
  switch: 'switch',
  toggle: 'toggle',
  activeInactive: 'activeInactive',
};

function Selection({
  type,
  checked = false,
  onClick,
  onChange,
  size,
  disabled,
  ref,
  className,
  style,
}: SelectionProps) {
  const eventFunction = onClick || onChange;

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
        <div data-testid="btn-left" className="btn left">
          <span>não</span>
        </div>
        <div data-testid="btn-right" className="btn right">
          <span>sim</span>
        </div>
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
        <div className="btn left">
          <span>{checked ? 'desativar' : 'inativo'}</span>
        </div>
        <div className="btn right">
          <span>{checked ? 'ativo' : 'ativar'}</span>
        </div>
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
}

export default Selection;
