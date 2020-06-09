import uniqBy from 'lodash.uniqby';

// const filterOverlappingDrop = (xScale, fromDate) => (d) =>
//     uniqBy(d.data, (data) => Math.round(xScale(fromDate(data))));

export default (config, xScale) => selection => {
    const {
        drop: {
            color: dropColor,
            fromDate,
            toDate,
            onClick,
            onMouseOver,
            onMouseOut,
        },
        label: { labelWidth },
    } = config;

    const drops = selection.selectAll('.drop').data(d => d.data);

    drops
        .enter()
        .append('rect')
        .classed('drop', true)
        .on('click', onClick)
        .on('mouseover', onMouseOver)
        .on('mouseout', onMouseOut)
        .merge(drops)
        .attr('width', d => xScale(toDate(d)) - xScale(fromDate(d)))
        .attr('height', 10)
        .attr('fill', dropColor)
        .attr('x', d => xScale(fromDate(d)))
        .attr('clip-path', 'url(#clip)');

    drops
        .exit()
        .on('click', null)
        .on('mouseover', null)
        .on('mouseout', null)
        .remove();
};
