import "./WeddingPage.css";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { WeddingGallery } from "../components/WeddingGallery";
import { useParams } from "react-router";

const WeddingPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Nhật Nam & Lan Linh</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <WeddingGallery></WeddingGallery>
        <div className="float-button">
          <IonButton color="light">
            {/* <IonIcon slot="start" icon={star} /> */}
            Đến Nhà Thờ
          </IonButton>
          <IonButton color="light">
            {/* <IonIcon slot="start" icon={star} /> */}
            Đến Nhà Hàng
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WeddingPage;
