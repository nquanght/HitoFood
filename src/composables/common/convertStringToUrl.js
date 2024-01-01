export default () => {
    function convertString(params){
        const removedAccents = params.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return removedAccents.toLowerCase().replace(/\s+/g, '-');
    }

    return {convertString}
}