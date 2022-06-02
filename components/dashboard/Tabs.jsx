import React, { useState } from "react";
import styles from "../../styles/sass/tabs.module.scss";
import InputElement from "../InputElement";
import SubmitButton from "../SubmitButton";

const AccountDetailsTab = ({ accountDetails }) => {
  console.log("account details from parents...", accountDetails);

  return (
    <div id="one">
      <form>
        <div>
          <label>First Name</label>
          <InputElement
            placeholder="First Name"
            type="text"
            id="firstname"
            name="firstname"
            value={accountDetails?.fullname?.split(" ")[0]}
          />
        </div>

        <div>
          <label>Last Name</label>
          <InputElement
            placeholder="Last Name"
            type="text"
            id="lastname"
            name="lastname"
            value={accountDetails?.fullname?.split(" ")[1]}
          />
        </div>

        <div>
          <label>Email Address</label>
          <InputElement
            placeholder="Email Address"
            type="email"
            id="email"
            name="email"
            value={accountDetails?.email}
          />
        </div>

        <div>
          <label>Phone No.</label>
          <InputElement
            placeholder="Phone"
            type="email"
            id="email"
            name="email"
            value={accountDetails?.phonenumber}
          />
        </div>
      </form>
    </div>
  );
};

const ChangePasswordTab = () => {
  return (
    <div id="two">
      <form>
        <div>
          <label>Current Password</label>
          <InputElement
            placeholder="Enter current password"
            type="password"
            id="current-password"
            name="current-password"
          />
        </div>

        <div>
          <label>New Password</label>
          <InputElement
            placeholder="Enter new password"
            type="password"
            id="new-password"
            name="new-password"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <InputElement
            placeholder="Re-enter new password"
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>

        <SubmitButton label={"Save Changes"} />
      </form>
    </div>
  );
};

function Tabs({ user }) {
  const [activeTab, setActiveTab] = useState("one");

  return (
    <div className={styles.tabs}>
      <ol className="tab-buttons">
        <li
          className={activeTab === "one" ? "active-tab" : ""}
          onClick={() => setActiveTab("one")}
        >
          Account Details
        </li>
        <li
          className={activeTab === "two" ? "active-tab" : ""}
          onClick={() => setActiveTab("two")}
        >
          Change Password
        </li>
      </ol>

      <div className="tab-content">
        {activeTab === "one" ? (
          <AccountDetailsTab accountDetails={user} />
        ) : (
          <ChangePasswordTab />
        )}
      </div>
    </div>
  );
}

export default Tabs;
