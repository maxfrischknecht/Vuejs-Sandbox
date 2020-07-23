# Axios & GraphQL

To avoid the buggy behaviour of apollo when working with matrix fields in craft cms use axios.

```
npm install axios

```
script:

```
const axios = require("axios");

```

Vue instance:

```
data() {
    return {
      entries: []
    };
  },
  mounted() {
    axios({
      url: "http://showtime2020.orientedhosting.com/api",
      method: "POST",
      data: {
        query: `
          query {
            entries(section: "galleries") {
              title
              ... on galleries_galleries_Entry {
                # Any fields on the galleries entry type
                description
                adress
    			# Your Matrix Field Handle
                galleryPageModules {
                  ... on galleryPageModules_artworkInformation_BlockType {
                    # Block Type
                    __typename # Ensures the response has a field describing the type of block => also needed for v-if
                    artistName # Fields on Block Type, uses field handle
                    uid
                  }
                  ... on galleryPageModules_videoConferenceOption_BlockType {
                    # Block Type
                    __typename # Ensures the response has a field describing the type of block
                    personalMessage # Fields on Block Type, uses field handle
                  }
                }
              }
            }
          }
          
        `
      }
    }).then(result => {
      console.log(result.data);
      console.log(result.data.data.entries);
      this.entries = result.data.data.entries;
    });
  },

```
In your template:

```
<div v-for="(entry, index) in entries" :key="index">
  <GalleriesHead :gEntry="entry"></GalleriesHead>
  <template v-for="(block, indx) in entry.galleryPageModules">
    <div v-if="block.__typename == 'galleryPageModules_artworkInformation_BlockType'" :key="indx">
      <ArtworkInformation :key="indx" :gEntry="block"></ArtworkInformation>
    </div>
    <div v-else-if="block.__typename == 'galleryPageModules_videoConferenceOption_BlockType'" :key="indx">
      Video Conference
    </div>

  </template>
</div>
```