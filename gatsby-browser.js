exports.onRouteUpdate = ({ location }) => {
    document.dispatchEvent(new Event('gatsbyworkshop.route-change'));
};