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

export const WeddingGallery: React.FC = () => (
  <IonContent>
    <IonSlides options={slideOpts}>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/slide1/DSC09706.webp`}></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>02/09/2016 - lần đầu gặp nhau</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09714_SVrM6uPtW.webp?updatedAt=1641028473000`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09724_rG2-2jOuZ.webp?updatedAt=1641028460013`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>02/09/2017 - bắt đầu tìm hiểu</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg src={`assets/hinhcuoi/slide3/DSC09727.webp`}></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>tìm hiểu nhau trong 4 năm 4 tháng và 14 ngày</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00277_h2TNeqtA5.webp?updatedAt=1641028480717`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>kỉ niệm đầu tiên tại TKMT Đà Lạt 2016</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00381_BZtUXmym_.webp?updatedAt=1641028459453`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00425_f2e8DQAvI.webp?updatedAt=1641028439895`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>chú rể Nhật Nam tin Chúa vào năm 2016 (20 tuổi)</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09737_kgA34Kogi.webp?updatedAt=1641028439413`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>cô dâu Lan Linh tin Chúa năm 2012 (15 tuổi)</IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09891_472VwO3AuC.webp?updatedAt=1641028438475`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00223_vpY4J1foXpqn.webp?updatedAt=1641028439225`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText></IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00388_4mDovQes2.webp?updatedAt=1641028441544`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC01235_1Ck1mpcIkAH.webp?updatedAt=1641028441509`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC01311_58kL8W79_sXp.webp?updatedAt=1641028439861`}
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
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC01389_Dw2v6WHR2.webp?updatedAt=1641028442243`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09859_du6ACUeWoF.webp?updatedAt=1641028456836`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00052_oApieyMmjLn.webp?updatedAt=1641028456905`}
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
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00899_u8dyjVTbI.webp?updatedAt=1641028465128`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00135_0HjSku0v5.webp?updatedAt=1641028465405`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00161_Zm5UTz_2ZB.webp?updatedAt=1641028449113`}
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
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09842_HUQ9icCy1.webp?updatedAt=1641028449930`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09951_vegr6v9ABw.webp?updatedAt=1641028452557`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09792_p5BFvKliu.webp?updatedAt=1641028449032`}
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
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC01655_DBzk34OpNy.webp?updatedAt=1641028454624`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00991_KB-VDX4Su.webp?updatedAt=1641028461456`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09933_cBgbQWT-FKT.webp?updatedAt=1641028462177`}
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
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09729_bb9FktDFqm8.webp?updatedAt=1641028468144`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09836_SxbSV8l3a.webp?updatedAt=1641028468555`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00142_zfgXUx83O.webp?updatedAt=1641028471986`}
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
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC01256_PyF5A5xBr-O.webp?updatedAt=1641028477349`}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {/* <IonText>lần đầu gặp nhau trong TKMT 2016</IonText> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
      <IonSlide>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC09851_e_BzXx10U.webp?updatedAt=1641028478957`}
              ></IonImg>
            </IonCol>
            <IonCol>
              <IonImg
                src={`https://ik.imagekit.io/namlinhfamily/webp/DSC00955_3bcAd0A24.webp?updatedAt=1641028475960`}
              ></IonImg>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonSlide>
    </IonSlides>
  </IonContent>
);
