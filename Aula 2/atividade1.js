class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        return this.string.indexOf(subStr);
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        return this.string.lastIndexOf(subStr);
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const result = this.string.match(new RegExp(subStr1 + "(.*)" + subStr2));
        if (result) {
            return result[1];
        } else {
            return null;
        }
    }

    /**
    Given the string attribute of the class,
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2,
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string && this.string.length <= 2) {
            return this.string;
        } else {
            return this.string.substring(0, 2) + this.string.substring(this.string.length-2, this.string.length);
        }
    }

    /**
    Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1
    * @return {String}
    */
    fix_start(str1) {
        let initialChar = this.string.substring(0, 1);
        let string = this.string.substring(1);
        let regex = new RegExp(str1, 'g');
        return initialChar + string.replace(regex, "*****");
     }

}

module.exports = StringManipulations;