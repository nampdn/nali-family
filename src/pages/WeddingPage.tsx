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
          <IonButton color="light" href="https://goo.gl/maps/1MJZP3m79SUVjkCs7">
            Đến Nhà Thờ
          </IonButton>
          <IonButton color="light" href="https://forms.gle/Vn8Cht6GFNR66nV67">
            Lời Chúc
          </IonButton>
          <IonButton color="light" href="https://goo.gl/maps/Bx75GWbeFdEXWRjT9">
            Đến Nhà Hàng
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WeddingPage;
