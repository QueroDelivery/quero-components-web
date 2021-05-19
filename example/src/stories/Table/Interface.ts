import { TableProps } from "semantic-ui-react";

export interface ITableComponent extends TableProps{
  title?: string;
  message?: string;
  loading?: boolean;
  hasMore?: () => void;
  pagination?: React.ReactElement;
  titleStyle?: React.CSSProperties | any;
  messageStyle?: React.CSSProperties | any;
}
