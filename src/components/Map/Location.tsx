import {Map, YMaps, Placemark} from '@pbe/react-yandex-maps';

const Location = () => (
    <YMaps>
      <Map defaultState={{ center: [55.751574, 37.56], zoom: 14 }} width={500}>
        <Placemark defaultGeometry={[55.751574, 37.56]} />
      </Map>
    </YMaps>
);
export default Location;