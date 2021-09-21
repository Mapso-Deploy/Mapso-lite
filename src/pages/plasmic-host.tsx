// src/pages/plasmic-host.tsx
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/host';
import Helmet from 'react-helmet';
function Host() {
return (
<>
<Helmet>
{/* Optional: */}
<script src="https://static1.plasmic.app/preamble.js" />
</Helmet>
<PlasmicCanvasHost />
</>
);
}
export default Host;