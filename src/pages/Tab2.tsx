import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Zakat Maal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol class="ion-align-self-center" size-md="12" size-lg="12" size-xs="12">
                <IonItem>
                    <IonLabel position="floating">Nilai Deposito/Tabungan/Giro</IonLabel>
                  <IonInput type="number" placeholder=" Masukan Jumlah Nilai Deposito" required />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Nilai Properti & Kendaraan</IonLabel>
                  <IonInput type="number" placeholder=" Masukan number Baru" required/>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Hutang / Cicilan</IonLabel>
                  <IonInput type="number" placeholder=" Masukan Ulangi number" required/>
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

export default Tab2;
