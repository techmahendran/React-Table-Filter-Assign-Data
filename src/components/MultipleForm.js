import { useState } from "react";
import SuccessNoti from "./SuccessNoti";

const MultipleForm = ({
  languageName,
  lonchYear,
  languageUse,
  languageFull_form,
  setLanguageName,
  setLonchYear,
  setLanguageUse,
  setLanguageFull_form,
  setFilterInput,
}) => {
  const [isActive, setIsActive] = useState(false);

  const successNotiBtn = (e) => {
    e.preventDefault();

    if (
      languageName === "" ||
      lonchYear === "" ||
      languageUse === "" ||
      languageFull_form === ""
    ) {
      alert("Click on Any Table Row");
    } else {
      setTimeout(() => {
        setIsActive(isActive);
      }, 5000);

      setIsActive(!isActive);
      setLanguageName("");
      setLonchYear("");
      setLanguageUse("");
      setLanguageFull_form("");
      setFilterInput("");
    }
  };

  const closeToast = () => {
    setIsActive(false);
  };

  return (
    <>
      <SuccessNoti isActive={isActive} closeToast={closeToast} />

      <form id="form" onSubmit={successNotiBtn}>
        <div className="form-group">
          <div className="inputField">
            <label>Language Name</label>
            <input
              readOnly
              type="text"
              id="fname"
              name="firstname"
              placeholder="Language name.."
              value={languageName}
              onChange={(e) => setLanguageName(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Lanch Year</label>
            <input
              readOnly
              type="text"
              id="lname"
              name="lastname"
              placeholder="Lanch Year.."
              value={lonchYear}
              onChange={(e) => setLonchYear(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Use</label>
            <input
              readOnly
              type="text"
              id="fname"
              name="firstname"
              placeholder="Language Use.."
              value={languageUse}
              onChange={(e) => setLanguageUse(e.target.value)}
            />
          </div>
          <div className="inputField">
            <label>Invented Name</label>
            <input
              readOnly
              type="text"
              id="lname"
              name="lastname"
              placeholder="Invented Name.."
              value={languageFull_form}
              onChange={(e) => setLanguageFull_form(e.target.value)}
            />
          </div>
        </div>

        <button className="btn">Save</button>
      </form>
    </>
  );
};

export default MultipleForm;
