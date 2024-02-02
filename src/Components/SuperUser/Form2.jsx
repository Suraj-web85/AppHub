import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetails2({
  formdata,
  setFormdata,
  changeFormnumber,
}) {
  const [popupVisible,setpopupVisible] = useState(false);
  const navigate = useNavigate();

  const handlePrev = () => {
    changeFormnumber(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ", formdata);
    setpopupVisible(true);
    setTimeout(() => {
      navigate('/');
      setpopupVisible(false);
    }, 6000);
  };
  return (
    <>
      <form className="reg-su-form" onSubmit={handleSubmit}>
        <label htmlFor="status" className="ques-con gridspan2">
          <p className="para">
            What indicates your current professional status
          </p>
          <select
            name="status"
            id="status"
            className="reg-su-input sspara"
            value={formdata.status}
            required
            onChange={(e) =>
              setFormdata({ ...formdata, status: e.target.value })
            }
          >
            <option value="1">Student</option>
            <option value="2">Employed</option>
            <option value="3">Unemployed</option>
            <option value="4">Self-Employed</option>
          </select>
        </label>
        <label htmlFor="uploadertype" className="ques-con gridspan2">
          <p className="para">Are you creating this account as an </p>
          <select
            name="uploadertype"
            value={formdata.uploadertype}
            onChange={(e) =>
              setFormdata({ ...formdata, uploadertype: e.target.value })
            }
            id="uploadertype"
            className="reg-su-input sspara"
            required
          >
            <option value="1">Individual</option>
            <option value="2">Organization</option>
          </select>
        </label>
        <label htmlFor="url" className="gridspan2 para">
          Do you have a website or any other link from which you can be
          communicated ? This will be public and can be seen by anyone on AppHub
          <input
            type="url"
            id="url"
            value={formdata.url}
            onChange={(e) => setFormdata({ ...formdata, url: e.target.value })}
            placeholder="URL..."
            name="url"
            className="reg-su-input"
          />
        </label>
        
        <label htmlFor="disclose1" className="aflex gridspan2 para">
          Are you willing to discolse your Primary Email Address in Support
          section of your uploaded apps, this info will become public and would
          be visible to anyone on AppHub
          <input
            type="checkbox"
            id="disclose1"
            checked={formdata.disclose1}
            onChange={(e) =>
              setFormdata({ ...formdata, disclose1: e.target.checked })
            }
            name="disclose1"
            className="reg-su-check"
          />
        </label>

        <label htmlFor="terms" className="aflex gridspan2 para">
          I have read and agreed to The Terms of Services and Privacy Policy
          <input
            type="checkbox"
            checked={formdata.terms}
            onChange={(e) =>
              setFormdata({ ...formdata, terms: e.target.checked })
            }
            name="terms"
            className="reg-su-check"
            id="terms"
            required
          />
        </label>
        <div className="btn-container aflex">
          <button
            type="button"
            className="su-form-btn prev-btn para reg-su-input"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            type="submit"
            className="su-form-btn sub-btn para reg-su-input"
          >
            Submit
          </button>
        </div>
      </form>
      <div className={`registerpopup aflex ${popupVisible ? 'reg-popup-visible' : ''}`}>
        <h2 className="mh">Congratulations Your Request Got Uploaded</h2>
        <p className="mpara">
          Please wait till APPHUB uproves your rquest, you will be notified via
          email
        </p>
      </div>
    </>
  );
}
