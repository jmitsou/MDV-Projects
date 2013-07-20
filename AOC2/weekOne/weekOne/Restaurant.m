//
//  childFactory.m
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "Restaurant.h"

@implementation Restaurant


+(menuBase *) createNewMenu: (int)menuType
{
    if (menuType == BREAKFAST)
    {
        return [[breakfast alloc] init];
    }
    else if(menuType == LUNCH)
    {
        return [[lunch alloc] init];
    }
    else if (menuType == DINNER)
    {
      return [[dinner alloc] init];
    }
    else return nil;
}


@end
