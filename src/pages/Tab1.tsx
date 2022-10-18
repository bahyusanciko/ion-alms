import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { cardOutline, cashOutline, walletOutline } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zakat Profesi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol class="ion-align-self-center" size-md="12" size-lg="12" size-xs="12">
                <IonItem>
                    <IonIcon 
                    slot="start"
                    icon={walletOutline}
                    />
                    <IonLabel position="floating">Gaji PerBulan</IonLabel>
                  <IonInput type="number" placeholder=" Masukan Jumlah Gaji" required />
                </IonItem>
                <IonItem>
                  <IonIcon 
                    slot="start"
                    icon={cardOutline}
                    />
                  <IonLabel position="floating">Pendapatan Lainnya</IonLabel>
                  <IonInput type="number" placeholder=" Masukan Jumlah Pendapatan Lainnya" required/>
                </IonItem>
                <IonItem>
                  <IonIcon 
                    slot="start"
                    icon={cashOutline}
                    />
                  <IonLabel position="floating">Hutang / Cicilan</IonLabel>
                  <IonInput type="number" placeholder=" Masukan Jumlah Hutang / Cicilan" required/>
                </IonItem>
                <IonButton expand="block" type="submit" >
                  HITUNG ZAKAT
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
