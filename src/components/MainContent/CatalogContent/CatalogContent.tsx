import { FC } from "react";

import { Text } from "@consta/uikit/Text";
import CatalogCards from "./CatalogCards";
import CatalogButtonGroup from "./CatalogButtonGroup";


const CatalogContent: FC = () => {



    return (
        <>
            <div style={{ marginTop: '3em', marginBottom: '6em' }}>
                <Text size="2xl" view="primary" style={{ marginBottom: '1em' }}>Каталог тем</Text>
                <CatalogButtonGroup />
                <CatalogCards />
            </div>
        </>);
}

export default CatalogContent;