import React from "react";
import styles from "./style.module.css";
const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.s1}>
        <div className={styles.s11}>Our Technology</div>
        <div className={styles.s12}>
          We are developing a stack of proprietary technologies that allow the enterprise to realize the digital
          transformation of their customer care.
        </div>
      </div>

      <div className={styles.s2}>
        <div className={styles.item}>
          <img src="/omni-channel.png" className={styles.s21} />
          <div className={styles.s22}>Omni-Channel Conversational Platform</div>
          <div className={styles.s23}>
            Our platform provides the infrastructure and core capabilities to power an omni-channel conversational
            experience.
          </div>
          <div className={styles.s24}>Learn More</div>
        </div>

        <div className={styles.item}>
          <img src="/dnn-speech.png" className={styles.s21} />
          <div className={styles.s22}>Speech Recognition</div>
          <div className={styles.s23}>
            Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.
          </div>
          <div className={styles.s24}>Learn More</div>
        </div>

        <div className={styles.item}>
          <img src="/voice-biometrics.png" className={styles.s21} />
          <div className={styles.s22}>Voice Biometrics</div>
          <div className={styles.s23}>
            Authenticate customers via their unique biometric voice-print, in the background as they speak freely with
            the Virtual Agent.
          </div>
          <div className={styles.s24}>Learn More</div>
        </div>

        <div className={styles.item}>
          <img src="/anti-fraud.png" className={styles.s21} />
          <div className={styles.s22}>Anti-Fraud</div>
          <div className={styles.s23}>
            Our Anti-Fraud mechanisms provide detection capabilities for proactive end-to-end fraud prevention with 360°
            closed-loop Anti-Fraud and Self-Services.
          </div>
          <div className={styles.s24}>Learn More</div>
        </div>

        <div className={styles.item}>
          <img src="/developer-tools.png" className={styles.s21} />
          <div className={styles.s22}>Developer Tools</div>
          <div className={styles.s23}>
            Build brand-unique natural language applications for customer care with highly engaging user experiences and
            human-like conversational interactions.
          </div>
          <div className={styles.s24}>Learn More</div>
        </div>
      </div>
    </div>
  );
};
export default Index;
