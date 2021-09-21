import * as React from 'react';
import { registerComponent, PlasmicCanvasHost } from '@plasmicapp/host';
import { iframe3D } from '/Users/cozykev/Documents/GitHub/Mapso-lite/src/components/iframe3D.js';
import Helmet from 'react-helmet';
import { iframe } from '/Users/cozykev/Documents/GitHub/Mapso-lite/src/components/iframe.js';


registerComponent(iframe, {
name: 'iframe',
classNameProp: 'containerClassName',
importPath: './components/iframe'
});


registerComponent(iframe3D, {
name: 'iframe3D',
classNameProp: 'containerClassName',
importPath: './components/iframe3D'
});


function Host() {
return (
<>
<Helmet>
<script src="https://studio.plasmic.app/static/js/preamble.js" />
</Helmet>
<PlasmicCanvasHost />
</>
);
}
export default Host;