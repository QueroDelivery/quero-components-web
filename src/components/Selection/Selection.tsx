/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler, forwardRef, HTMLAttributes } from 'react';
import { sizesTypes } from '../../helpers/FnUtil';

import { Switch, Toggle, ActiveInactive } from './styles';

type TSelectors = 'switch' | 'toggle' | 'activeInactive';

type HtmlDivAttributes = HTMLAttributes<HTMLDivElement>;

export interface SelectionProps
  extends Omit<HtmlDivAttributes, 'onClick' | 'onChange'> {
  type: TSelectors;
  checked?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onChange?: MouseEventHandler<HTMLElement>;
  size?: sizesTypes;
  disabled?: boolean;
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
      ...props
    }: SelectionProps,
    ref,
  ) => {
    const eventFunction = !disabled ? onClick || onChange : undefined;

    function renderSwitch() {
      return (
        <Switch
          {...props}
          size={size}
          ref={ref}
          disabled={disabled}
          role="switch"
          onClick={eventFunction}
          data-disabled={disabled}
          data-state={checked ? 'checked' : 'unchecked'}
          aria-checked={checked}
        >
          <div className={`${checked ? 'checked' : ''}`} />
          <span data-testid="control" className="control" />
        </Switch>
      );
    }

    function renderToggle() {
      return (
        <Toggle
          {...props}
          checked={checked}
          ref={ref}
          size={size}
          disabled={disabled}
          aria-checked={checked}
          data-state={checked ? 'checked' : 'unchecked'}
          role="switch"
          onClick={eventFunction}
          data-disabled={disabled}
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
          {...props}
          checked={checked}
          aria-checked={checked}
          ref={ref}
          size={size}
          disabled={disabled}
          role="switch"
          onClick={eventFunction}
          data-disabled={disabled}
          data-state={checked ? 'checked' : 'unchecked'}
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
