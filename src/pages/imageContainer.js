import Ford from "../img/ford.jpg"
import TR from "../img/TR.jpg"
import NTT from "../img/ntt.jpg"
import Unisys from "../img/unisys.jpg"
import DS from "../img/DS.jpg"
import UTA_Mobile_vending from "../img/se_mobile_vending_app.jpg"
import Portfolio from "../img/Portfolio.jpg"
import IDS from "../img/IDS.jpg"
import TowerOfHanoi from "../img/towerOfHanoi.jpg"
import MACH_E from "../img/mach_e.jpg"
import Law from "../img/law.jpg"
import FMC from "../img/FMC.jpg"
import AIRCORE from "../img/aircore.jpg"
import DS1 from "../img/DS.jpg"
import Vending from "../img/se_mobile_vending_app.jpg"
import Portfolio1 from "../img/Portfolio.jpg"
import IDS1 from "../img/IDS.jpg"
import TOH from "../img/towerOfHanoi.jpg"

const imageArray = [Ford, TR, NTT, Unisys, DS, UTA_Mobile_vending, Portfolio, IDS, TowerOfHanoi, MACH_E, Law, FMC, AIRCORE, DS1, Vending, Portfolio1, IDS1, TOH]

export const getImage = (id) => {
    return imageArray[id - 1]
}
