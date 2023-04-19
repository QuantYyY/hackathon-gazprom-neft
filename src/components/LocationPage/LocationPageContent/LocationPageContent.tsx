import { FC } from "react";

import { Button } from "@consta/uikit/Button";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";

import { locationState } from "../../../store/locationSlice";
import { getLocation } from "../../../store/locationSlice";
import { useAppDispatch, useAppSelector } from "../../../hook";

const LocationPageContent: FC = () => {

    const dispatch = useAppDispatch();
    const store = useAppSelector(store => store.location)

    const onClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const data = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
                dispatch(getLocation(data));
            });
        } else {
            console.log("Ваш браузер не поддерживает Geolocation API");
        }
    }

    return (
        <>
            <Card className="locationCard" style={{ padding: '2em', borderRadius: '0.5em', backgroundColor: 'white' }}>
                {(store.city && store.coordinates && store.country) ?
                    (<>

                        <Text size="2xl" view="primary" style={{ marginBottom: '0.5em' }}>Текущая геолокация</Text>

                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Страна:
                            &nbsp;<Text as="span" view="primary">{store.country}</Text>
                        </Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Город:
                            &nbsp;<Text as="span" view="primary">{store.city}</Text>
                        </Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Широта:
                            &nbsp;<Text as="span" view="primary">{store.coordinates?.lat}</Text>
                        </Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Долгота:
                            &nbsp;<Text as="span" view="primary">{store.coordinates?.lon}</Text>
                        </Text>
                    </>) :
                    (<>
                        <Text size="2xl" view="primary" style={{ marginBottom: '0.5em' }}>Текущая геолокация</Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Страна: </Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Город: </Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Широта: </Text>
                        <Text size="l" view="secondary" style={{ marginBottom: '0.5em' }}>Долгота: </Text>
                    </>)
                }

                <Button label='Узнать геолокацию браузера' onClick={() => onClick()} />

            </Card>
        </>
    );
}

export default LocationPageContent;