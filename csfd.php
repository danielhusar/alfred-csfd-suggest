<?php

require_once('workflows.php');
$wf = new Workflows();

$orig = "matrix";
$xml = $wf->request( "http://google.com/complete/search?output=toolbar&q=".urlencode( $orig ) );
$xml = simplexml_load_string( utf8_encode($xml) );
$int = 1;

foreach( $xml as $sugg ):
	$data = $sugg->suggestion->attributes()->data;
	$wf->result( $int.'.'.time(), "$data", "$data", 'Search Google for '.$data, 'icon.png'  );
	$int++;
endforeach;

$results = $wf->results();
if ( count( $results ) == 0 ):
	$wf->result( 'googlesuggest', $orig, 'No Suggestions', 'No search suggestions found. Search Google for '.$orig, 'icon.png' );
endif;

echo $wf->toxml();