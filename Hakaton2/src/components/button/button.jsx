export const Button = ({ color, border, label, onClick }) => {
  const styles = {
    backgroundColor: color,
    padding: '10px 20px',
    border: 'none',
    borderRadius: `${border}px`,
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <button style={styles} onClick={onClick}>
      {label}
    </button>
  );
};
