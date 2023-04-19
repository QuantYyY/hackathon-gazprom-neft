import { FC } from "react";
import { HeaderModule, HeaderLogin } from '@consta/uikit/Header';
import './HeaderUser.scss';

const HeaderUser: FC = () => {

    return (
        <>
            <HeaderModule indent='s'>
                <HeaderLogin
                    isLogged={true}
                    personName='Михаил Романов'
                    personAvatarUrl='https://s3-alpha-sig.figma.com/img/8a7d/68fe/92be1f29404445476407d81857a346d3?Expires=1682899200&Signature=nY0hjjphA1OPMZpcP5L1i82-rpdtVP~i0FNc4ijNLkKLwhTDD9mljmbQb9x3sV7-cVY3HNLMBPMRCurc87gG6Wr7imqwhCgbZgHZ9xJCRxhuxfMxpZHPrdhrRAEHBsQQAD~B00D9wLc0NIcC0VIGFquci1WImKPE1qopKgnWMrfaKrlm3szS-OGvnmcFrUVCc6b30m3s0g-Go2f9sKAysjMxpbzN11Fkd2WOuSIwhiqA4--PhBFq3yegH6kmQKd3YLtbti6YpRfHZkrkAlGMmaDgJ1s8be8IoPF4IZBghHa4-PdERXWQlw2~ILujSdemxGJYodS8zFrcGV9XH-oVtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                />
            </HeaderModule>
        </>
    );
}

export default HeaderUser;