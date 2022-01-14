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

import { VuQuyGallery } from "../components/VuQuyGallery";
import { useParams } from "react-router";

const CouplePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton target="new" href="https://vgm.tv">
              VGM
            </IonButton>
          </IonButtons>
          <IonTitle>Nhật Nam & Lan Linh</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <VuQuyGallery></VuQuyGallery>
        <div className="float-button">
          <IonButton color="light" href="https://goo.gl/maps/1MJZP3m79SUVjkCs7">
            Nhà Thờ
          </IonButton>
          <IonButton color="light" href="https://goo.gl/maps/Bx75GWbeFdEXWRjT9">
            Nhà Hàng
          </IonButton>
          <IonButton color="light" href="https://forms.gle/c3SNDnKEf9VXfs7LA">
            Lời Chúc
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CouplePage;
