import { TableHTMLAttributes} from "react";

export interface ITableComponent
    extends TableHTMLAttributes<HTMLTableElement> {
      title?: string
      titleStyle?: React.CSSProperties
      message?: string
      messageStyle?: React.CSSProperties
      hasMore?: () => void;
      pagination?: React.ReactElement,
      loading?: boolean
}
