import {
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonText,
  IonToolbar,
} from '@ionic/react';

import { Link, useLocation } from 'react-router-dom';
import { optionsOutline, optionsSharp, heartOutline, storefrontOutline, storefrontSharp } from 'ionicons/icons';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Profesi',
    url: '/tab1',
    iosIcon: optionsOutline,
    mdIcon: optionsSharp
  },
  {
    title: 'Maal',
    url: '/tab2',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" className="ion-no-padding">
      <IonContent className="ion-no-padding">
        <IonToolbar>
          <IonText slot="start" className="ion-text-center ion-padding-start">
            <span>
              <strong>Apps Kalkulator Zakat</strong>
            </span>
          </IonText>
        </IonToolbar>
        <IonListHeader>Menu</IonListHeader>
        <IonList id="archive-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonText slot="end" className="ion-padding-end">
            Crafted with <IonIcon ios={heartOutline} md={heartOutline} /> by{" "}
            <Link
              target={"_blank"}
              rel={"noopener noreferrer"}
              to={{ pathname: "https://cariteknisi.com" }}
            >
              Bahyu Sanciko
            </Link>{" "}
            ©
          </IonText>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default Menu;
