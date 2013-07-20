//
//  unknown.m
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "dinner.h"

@implementation dinner

@synthesize numberOfDrinks, priceOfDrinks;

//gives value to properties
-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setNumberOfDrinks:8];
        [self setPriceOfDrinks:3];
    }
    return self;
    
};

//math to find total
-(void)findTotal
{
    [self setTotal:(numberOfDrinks * priceOfDrinks)];
    
}


@end
