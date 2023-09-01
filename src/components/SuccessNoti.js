const SuccessNoti = ({ activeMessage, isActive, closeToast }) => {
  return (
    <>
      {isActive && (
        <div
          className={`${
            activeMessage ? "notifications" : "notifications active"
          }`}
        >
          <div id="close_btn" onClick={closeToast}>
            <i className="fa fa-close"></i>
          </div>
          <h2>Thanks</h2>
          <p style={{ maxWidth: "300px" }}>
            My Sample Test for State Management Your Changes has been saved
          </p>
        </div>
      )}
    </>
  );
};

export default SuccessNoti;
