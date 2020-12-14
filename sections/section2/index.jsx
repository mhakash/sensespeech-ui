import React from "react";
import styles from "./style.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.part1}>
        <div className={styles.p1}>
          <div className={styles.p11}>Why SenseSpeech</div>
          <div className={styles.p12}>100% Deep Learning</div>
          <div className={styles.p13}>
            Like you, we weren’t satisfied with the way automatic transcription worked — or more accurately, didn’t work
            — so we rebuilt it. We scrapped the traditional methods and opted for complete deep learning models that
            deliver speech-to-text on a level that the big tech players can’t touch.
          </div>
          <div className={styles.p13}>
            Unlike other ASRs, SenseSpeech isn’t stagnant. It auto-learns from your data. Take it for a spin. Train a
            model to recognize the data you care about. It’ll continuously improve, delivering even greater accuracy and
            understanding over time.
          </div>
        </div>
      </div>
      <div className={styles.part2}>
        <div className={styles.p2}>
          <div className={styles.item}>
            <img src="/target-icon@2x.png" className={styles.img} />

            <div>
              <div className={styles.p21}>Maximum Acuracy</div>
              <div className={styles.p22}>
                Extremely High rate of Accuracy. The only AI speech platform that trains on your unique audio.
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <img src="/speeding-stopwatch-icon@2x.png" className={styles.img} />
            <div>
              <div className={styles.p21}>ACCELERATED TIME TO VALUE</div>
              <div className={styles.p22}>
                Faster and better. Transcribe hour long recordings in seconds. Get superior speech models in weeks, not
                months or years.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="/looping-heads-icon@2x.png" className={styles.img} />
            <div>
              <div className={styles.p21}>CONTINUOUS LEARNING</div>
              <div className={styles.p22}>
                Numerous Reseach on deep neural networking, which allow models to increase accuracy at unprecedented
                speed and cost.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="/molecule-sunburst-icon@2x.png" className={styles.img} />
            <div>
              <div className={styles.p21}>RESILIENT OPERATIONS</div>
              <div className={styles.p22}>
                State-of-the-art infrastructure supports many models across our customer base. Process millions of words
                per day with high availability.
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="/sliders-icon@2x.png" className={styles.img} />
            <div>
              <div className={styles.p21}>FUTURE-PROOF FOUNDATION</div>
              <div className={styles.p22}>
                Flexible and built for change. Train models and deploy anywhere – on premises or in the cloud.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
