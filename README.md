# Apple Tv Remote Control Card

## Description
### Remote Control for Apple Tv 
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://www.buymeacoffee.com/madmicio)

![all](example/remote_1.png)
![all](example/remote_list.png)

### the custom card is designed to be used in full screen on your smartphone as in the example below

![all](example/smartphone.jpg)

### It can be used as a normal card to insert into the UI. (default option, full screen mode must be enabled in config if necessary.

### Manual install


## hacs Card install
1. add madmicio/Apple-Tv-Card as custom reposity

2. Find and install `lettore impronte digitali` plugin

3. Add a reference  inside your resources config:

  ```yaml
resources:
url: /hacsfiles/Apple-Tv-Card/apple-tv-Card.js
type: module
```

1. Download and copy `apple-tv-Card.js` from (https://github.com/madmicio/Apple-Tv-Card) into your custom components  directory.

2. Add a reference `` from (https://github.com/madmicio/Apple-Tv-Card) into your custom components  directory.
` inside your resources config:

  ```yaml
  resources:
    - url: /local/"your_directory"/Apple-Tv-Card/apple-tv-Card.js
      type: module
  ```

  ### Main Options
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type` | string | **Required** | type: 'custom:apple-tv-card' | Type of the card |
| `name` | string | **Option** | apple tv name | the default name is: Apple TV |
| `entity` | string | **Required** | media_player.YOUR_APPLE_TV_ENTITY | the apple tv media player entity |
| `remote` | string | **Required** | remote.YOUR_APPLE_TV_REMOTE | the apple tv remote enetity |
| `full_screen` | string | **Option** | false  | sets the appearance of the card. by default the card is displayed as a normal card. if = true, the card will be set up for full screen display |
| `sources` | string | **Option**  |  | configures the list of quick access sources. maximum number 6. |

  ### source config
  if configured the surge option needs the following elements:
| Name | Type | Default | Supported options | Description |
| -------------- | ----------- | ------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` | string | **Required** | apple tv name | name of the source, it should be written exactly as it appears in the mediaplayer source list. (see fig. 1) |
| `image` | string | **Required** | apple tv name | the default name is: Apple TV |

# lovelace config: custom view
```yaml
type: custom:apple-tv-card
entity: media_player.soggiorno_2
name: 'apple tv soggiorno'
full_screen: true
sources:
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/infuse.png 
    source_name: 'Infuse'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/disney.png
    source_name: 'Disney+'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/netflix.png
    source_name: 'Netflix'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/primevideo.png
    source_name: 'Prime Video'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/youtube.png
    source_name: 'YouTube'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/dazn.png
    source_name: 'DAZN'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/youtube.png
    source_name: 'YouTube'
  - image: /local/custom_components/Apple-Tv-Card/soruces_logo/dazn.png
    source_name: 'DAZN'
```
#### full_scree: & sources: are options