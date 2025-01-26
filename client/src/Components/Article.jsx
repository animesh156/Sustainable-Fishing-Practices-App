import Balancer from 'react-wrap-balancer'

function Article() {
  return (
    <>

<article className="text-center p-4">

<p className="font-mono md:text-2xl text-sky-500 mt-8 mb-8">
  <Balancer>

  Overfishing is the overharvesting of fish and marine animals. The practice involves catching so many of one species at such a rate that the species is unable to recover to normal quantities. Overfishing reduces some species to such low numbers that their survival is endangered. It drives others to extinction.

Overfishing is the greatest threat to the biodiversity of the world’s oceans. Information published for U.S. fisheries can serve as an example of how large the problem is. In the United States, Congress requires the National Marine Fisheries Service (NMFS) to make regular reports. The organization analyzes the status of the major fishes within the country’s exclusive economic zone, or EEZ.

  </Balancer>
 </p>
<div className="m-auto flex justify-center">
<img src="/overfishing.jpg" alt="" className="md:max-w-2xl" />
</div>



<p className="font-mono md:text-2xl text-sky-500 mt-6 mb-6">
  <Balancer>

  Every country with a coastline may establish an EEZ extending 200 nautical miles (370 kilometers) from shore. Within the EEZ the coastal country or state has the right to exploit and regulate fisheries to its benefit. The areas involved are considerable. In the United States they cover portions of the Atlantic, the Pacific, the Caribbean, and the Gulf of Mexico.
  At the turn of the 21st century, the NMFS determined some 100 fish stocks to be overfished and a few others close to being so. Some 130 stocks were not thought to be overfished. For about another 670 fish stocks, there was not enough data. Those species were not considered economically important enough for further investigation. Thus, a little under half of the stocks that could be assessed were considered overfished. Other countries were facing the same dilemma.

  </Balancer>

</p>

<div className="m-auto flex justify-center">

<img src="/data.jpg" alt="" className="h-96" />

</div>


</article>

    </>
  )
}

export default Article