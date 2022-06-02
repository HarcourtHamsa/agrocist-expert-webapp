import React from "react";
import styles from "../../styles/sass/voiceSearch.module.scss";

import {MdRecordVoiceOver} from 'react-icons/md'

import voice from "../../assets/images/icons8-voice-64.png";
import Image from "next/image";

function VoiceSearchWidget() {
  return (
    <div className={styles.btn}>
        <MdRecordVoiceOver size={30} />
      {/* <Image src={voice} width={50} height={50} /> */}
    </div>
  );
}

export default VoiceSearchWidget;
