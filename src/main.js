import { Entry } from './journal'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var journal = [];
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var newEntry = "";
        var newTitle = "";
        var newContent = "";
        newTitle = $("input#title").val();
        newContent = $("input#content").val();
        newEntry = new Entry(newTitle, newContent);
        journal.push(newEntry);
        var wordcount = newEntry.wordCount();
        $("#wordcount").text(wordcount);
        var vowelcount = newEntry.vowelCount();
        var consonantcount = newEntry.consonantCount();
        $("#vowelcount").text(vowelcount);
        $("#consonantcount").text(consonantcount);
    });
});