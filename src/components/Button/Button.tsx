import { ButtonLoadMore } from "./Button.styled";
type ButtonProps = {
  onLoadMore: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ onLoadMore }: ButtonProps) => {
  return (
    <ButtonLoadMore type="button" onClick={onLoadMore}>
      Load more
    </ButtonLoadMore>
  );
};
export default Button;
