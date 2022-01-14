import "./WeddingGallery.css";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  loop: true,
  autoplay: {
    delay: 4000,
  },
};

export const CoupleGallery: React.FC = () => (
  <IonContent>
    <IonSlides options={slideOpts}>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/IMG_1600_NwIbL7i_8RG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182694598`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/p4_aK7opp9mZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182712523`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>Cùng phục vụ Chúa tại BTN Gia Định</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/DSC05321_to9SMpPg_hr.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182710426`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/PXL_20201003_032321046.PORTRAIT_OVYbn7fiP.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182706235`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/PXL_20201018_154620267.PORTRAIT-01.COVER_mPerlAtO_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182704087`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/IMG_1980_Mo6inrnkq.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182701031`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/IMG_1010_J95lJzxYJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182696182`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/couple/IMG_0282_Yrih7tlU3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642182695084`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
    </IonSlides>
  </IonContent>
);
