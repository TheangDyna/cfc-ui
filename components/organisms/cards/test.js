// const smallItemStyles: React.CSSProperties = {
//     3    cursor: 'pointer',
//     4    objectFit: 'cover',
//     5    width: '100%',
//     6    maxHeight: '100%',
//     7  }
//     8
//     9  const uiElements: GalleryProps['uiElements'] = [
//     10    {
//     11      name: 'bulletsIndicator',
//     12      order: 9,
//     13      isButton: false,
//     14      appendTo: 'wrapper',
//     15      onInit: (el, pswpInstance) => {
//     16        let prevIndex = -1
//     17        const thumbnails: HTMLElement[] = []
//     18
//     19        
//     20        el.style.position = 'absolute'
//     21        el.style.bottom = '20px'
//     22        el.style.left = '10px'
//     23        el.style.right = '0'
//     24        el.style.display = 'grid'
//     25        el.style.gridGap = '10px'
//     26        el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
//     27        el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
//     28        el.style.justifyContent = 'center'
//     29        
//     30
//     31        const dataSource = pswpInstance.options.dataSource as DataSourceArray
//     32
//     33        for (let i = 0; i < dataSource.length; i++) {
//     34          const slideData = dataSource[i]
//     35
//     36          const thumbnail = document.createElement('div')
//     37          thumbnail.style.transition = 'transform 0.15s ease-in'
//     38          thumbnail.style.opacity = '0.6'
//     39          thumbnail.style.cursor = 'pointer'
//     40          thumbnail.onclick = (e: MouseEvent) => {
//     41            const target = e.target as HTMLImageElement | HTMLDivElement
//     42            const thumbnailEl =
//     43              target.tagName === 'IMG'
//     44                ? target.parentElement
//     45                : (e.target as HTMLImageElement | HTMLDivElement)
//     46            pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
//     47          }
//     48
//     49          const thumbnailImage = document.createElement('img')
//     50          thumbnailImage.setAttribute('src', slideData.msrc)
//     51          thumbnailImage.style.width = '100%'
//     52          thumbnailImage.style.height = '100%'
//     53          thumbnailImage.style.objectFit = 'cover'
//     54
//     55          thumbnail.appendChild(thumbnailImage)
//     56
//     57          el.appendChild(thumbnail)
//     58
//     59          thumbnails.push(thumbnail)
//     60        }
//     61
//     62        pswpInstance.on('change', () => {
//     63          if (prevIndex >= 0) {
//     64            const prevThumbnail = thumbnails[prevIndex]
//     65            prevThumbnail.style.opacity = '0.6'
//     66            prevThumbnail.style.cursor = 'pointer'
//     67            prevThumbnail.style.transform = 'scale(1)'
//     68          }
//     69
//     70          const currentThumbnail = thumbnails[pswpInstance.currIndex]
//     71          currentThumbnail.style.opacity = '1'
//     72          currentThumbnail.style.cursor = 'unset'
//     73          currentThumbnail.style.transform = 'scale(1.2)'
//     74
//     75          prevIndex = pswpInstance.currIndex
//     76        })
//     77      },
//     78    },
//     79  ]
//     80
//     81  return (
//     82    <Gallery uiElements={uiElements}>
//     83      <div
//     84        style={{
//     85          display: 'grid',
//     86          gridTemplateColumns: '240px 171px 171px',
//     87          gridTemplateRows: '114px 114px',
//     88          gridGap: 12,
//     89        }}
//     90      >
//     91        <Item
//     92          original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
//     93          thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
//     94          width="1600"
//     95          height="1600"
//     96          alt="Photo of seashore by Folkert Gorter"
//     97        >
//     98          {({ ref, open }) => (
//     99            <img
//     100              style={{ cursor: 'pointer' }}
//     101              src="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg"
//     102              ref={ref as React.MutableRefObject<HTMLImageElement>}
//     103              onClick={open}
//     104            />
//     105          )}
//     106        </Item>
//     107        <Item
//     108          original="https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg"
//     109          thumbnail="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
//     110          width="1600"
//     111          height="1068"
//     112          alt="Photo of mountain lake by Samuel Rohl"
//     113        >
//     114          {({ ref, open }) => (
//     115            <img
//     116              style={smallItemStyles}
//     117              src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg"
//     118              ref={ref as React.MutableRefObject<HTMLImageElement>}
//     119              onClick={open}
//     120            />
//     121          )}
//     122        </Item>
//     123        <Item
//     124          original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
//     125          thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
//     126          width="1600"
//     127          height="1066"
//     128          alt="Photo of fog in the village by Ales Krivec"
//     129        >
//     130          {({ ref, open }) => (
//     131            <img
//     132              style={smallItemStyles}
//     133              src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
//     134              ref={ref as React.MutableRefObject<HTMLImageElement>}
//     135              onClick={open}
//     136            />
//     137          )}
//     138        </Item>
//     139        <Item
//     140          original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
//     141          thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
//     142          width="1600"
//     143          height="1066"
//     144          alt="Photo of river sunset by Michael Hull"
//     145        >
//     146          {({ ref, open }) => (
//     147            <img
//     148              style={{ ...smallItemStyles, gridColumnStart: 2 }}
//     149              src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
//     150              ref={ref as React.MutableRefObject<HTMLImageElement>}
//     151              onClick={open}
//     152            />
//     153          )}
//     154        </Item>
//     155        <Item
//     156          original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
//     157          thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
//     158          width="1600"
//     159          height="1066"
//     160          alt="Photo of bear by Thomas Lefebvre"
//     161        >
//     162          {({ ref, open }) => (
//     163            <img
//     164              style={smallItemStyles}
//     165              src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
//     166              ref={ref as React.MutableRefObject<HTMLImageElement>}
//     167              onClick={open}
//     168            />
//     169          )}
//     170        </Item>
//     171      </div>
//     172    </Gallery>
//     173  )
//     174}