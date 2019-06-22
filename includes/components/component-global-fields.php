<?php 
use Carbon_Fields\Field;

class FieldsGlobal{
    static function getGaps()
    {
        $gaps = array(
            //Padding top of block
            Field::make('select', 'pt', __('Marginez wewnętrzny górny w pikselach'))
            ->set_options(array(
                'pt160' => '160',
                'pt128' => '128',
                'pt64' => '64',
                'pt32' => '32',
                'none' => '0',
            )),
            //Padding bottom of block
            Field::make('select', 'pb', __('Marginez wewnętrzny dolny w pikselach'))
                ->set_options(array(
                    'pb160' => '160',
                    'pb128' => '128',
                    'pb64' => '64',
                    'pb32' => '32',
                    'none' => '0',
                )),
            //Margin top of block
            Field::make('select', 'mt', __('Marginez górny w pikselach'))
                ->set_options(array(
                    'mt224' => '224',
                    'mt160' => '160',
                    'mt128' => '128',
                    'mt64' => '64',
                    'mt32' => '32',
                    'none' => '0',
                )),
            //Margin bottom of block
            Field::make('select', 'mb', __('Marginez dolny w pikselach'))
                ->set_options(array(
                    'mb224' => '224',
                    'mb160' => '160',
                    'mb128' => '128',
                    'mb64' => '64',
                    'mb32' => '32',
                    'none' => '0',
                ))
        );
        return $gaps;
    }
}

