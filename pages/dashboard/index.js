import React from "react";
import Wrapper from "../../components/dashboard/Wrapper";
import styles from "../../styles/sass/dashboard.module.scss";

import { MdPeople } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import StatsCard from "../../components/dashboard/StatsCard";
import AppointmentsCard from "../../components/dashboard/AppointmentsCard";
import Notifications from "../../components/dashboard/Notifications";
import WithAuth from "../../HOCs/WithAuth";

function Index() {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h1>Welcome back, Adeoye </h1>
        <div className={styles.col3}>
          <StatsCard
            icon={<MdPeople size={35} />}
            number={142}
            title="CONSULTATION"
          />

          <StatsCard
            icon={<BsHourglassSplit size={35} />}
            number={2}
            title="IN PROGRESS"
          />

          <StatsCard
            icon={<AiOutlineFileDone size={35} />}
            number={12}
            title="completed"
          />
        </div>

        <div className={styles.col2}>
          <AppointmentsCard />
          <Notifications />
        </div>
      </div>
    </Wrapper>
  );
}

export default WithAuth(Index);
