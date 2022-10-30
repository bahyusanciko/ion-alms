import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [alert] = useIonAlert();
  const [salary, setSalary] = useState<any>();
  const [income, setIncome] = useState<any>();
  const [debit, setDebit] = useState<any>();
  const [totalAlms, setTotalAlms] = useState<any>(0);
  const [totalSalary, setTotalSalary] = useState<any>(0);

  const massageAlert = async (status:string,body:string) => {
     alert({
      header: status,
      message: body,
      buttons: [{cssClass: 'alert-button-confirm', text: 'Ok', handler: (d) => console.log('ok pressed') }],
    })
  }
  const countAlms = () => {
    if (!salary || !income || !debit) {
        massageAlert('Gagal','Please enter a valid input')
        return;
    }
    let total = parseInt(salary)+parseInt(income)-parseInt(debit);
    setTotalSalary(total)
    setTotalAlms((total*2.5)/100)
  }
  const Rupiah = (number:number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(Math.round(number));
  };

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
                  <IonInput type="number" placeholder=" Masukan Jumlah Nilai Deposito" value={salary} required onIonChange={(e:any) => setSalary(e.detail.value!)} />
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Nilai Properti & Kendaraan</IonLabel>
                  <IonInput type="number" placeholder=" Masukan number Baru" value={income} required onIonChange={(e:any) => setIncome(e.detail.value!)}/>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Hutang / Cicilan</IonLabel>
                  <IonInput type="number" placeholder=" Masukan Ulangi number" value={debit} required onIonChange={(e:any) => setDebit(e.detail.value!)}/>
                </IonItem>
                <IonButton expand="block" type="submit" onClick={countAlms}>
                  HITUNG ZAKAT
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        {totalAlms > 0 &&
          <IonCard>
            <IonTitle>Total Penghasilan :  <br /> <b>{Rupiah(totalSalary)}</b></IonTitle>
            <IonTitle>Jumlah zakat penghasilan Anda: <br /><b>{Rupiah(totalAlms)}</b></IonTitle>
          </IonCard>
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
