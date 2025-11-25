import './style.css';

type CheckProps = {
  checked: boolean;
  onCheck: (checked: boolean) => void;
}

const Check = ({checked, onCheck}: CheckProps)  => {
  return (
    <button
      className="check"
      onClick={() => { onCheck(!checked) }}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
